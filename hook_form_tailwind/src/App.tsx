import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Work = [
    {
        id: "sales",
        value: "Sales",
    },
    {
        id: "marketing",
        value: "Marketing",
    },
    {
        id: "accounting",
        value: "Accounting",
    },
    {
        id: "customer_service",
        value: "Customer Service",
    },
];

const Motivation = [
    {
        id: "money",
        value: "I want money!",
    },
    {
        id: "love",
        value: "I love this company",
    },
    {
        id: "learn",
        value: "I want to learn",
    },
    {
        id: "idk",
        value: "I don't know why",
    },
];

const Pay = [
    {
        id: "50k",
        value: "$50K",
    },
    {
        id: "100k",
        value: "$100K",
    },
    {
        id: "150k",
        value: "$150K",
    },
    {
        id: "200k",
        value: "$200K",
    },
];

interface IForms {
    introduce: string;
    dream: string;
    email: string;
}

function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitSuccessful },
    } = useForm<IForms>({
        mode: "onSubmit",
    });

    const [work, setWork] = useState("");
    const [motivation, setMotivation] = useState("");
    const [salary, setSalary] = useState("50k");
    const [form, setForm] = useState("");

    function onSubmit(data: FieldValues) {
        console.log(watch());
        console.log(data);
        const formResult = {
            ...data,
            department: work,
            motivation: motivation,
            salary: salary,
        };
        setForm(JSON.stringify(formResult));
    }

    function onWorkChange(e: string) {
        setWork(e);
        console.log(e);
    }

    function onMotivationChange(e: string) {
        setMotivation(e);
        console.log(e);
    }

    function onSalaryChange(e: string) {
        setSalary(e);
        console.log(e);
    }

    return (
        <main className=" w-screen h-screen bg-[url(https://pepefc.com/wp-content/uploads/2023/05/pepe-meme-collage.jpg)] bg-cover flex justify-center items-center py-4">
            <div className=" border-4 border-black border-r-8 border-b-8 w-[40%] h-[100%] bg-red-100 rounded-2xl flex flex-col justify-start items-start px-[4%] py-[2%] overflow-y-auto">
                <span className="w-full text-2xl font-bold text-center text-black">
                    Job Application Form
                </span>
                <form
                    className="w-full mt-6 text-black"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col items-start justify-start gap-7">
                        <div className="flex flex-col ">
                            <span className="font-bold">
                                What department do you wnat to work for?
                            </span>
                            {Work.map((work) => (
                                <div
                                    key={work.id}
                                    className="flex items-center justify-start mt-1 text-sm font-semibold"
                                >
                                    <input
                                        type="radio"
                                        id={work.id}
                                        value={work.value}
                                        name="work"
                                        className="mr-1"
                                        onChange={(e) =>
                                            onWorkChange(e.target.value)
                                        }
                                    />
                                    <label htmlFor={work.id}>
                                        {work.value}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">
                                Why do you wnat to join this company?
                            </span>
                            {Motivation.map((motivation) => (
                                <div
                                    key={motivation.id}
                                    className="flex items-center justify-start mt-1 text-sm font-semibold"
                                >
                                    <input
                                        type="radio"
                                        id={motivation.id}
                                        value={motivation.value}
                                        name="motivation"
                                        className="mr-1"
                                        onChange={(e) =>
                                            onMotivationChange(e.target.value)
                                        }
                                    />
                                    <label htmlFor={motivation.id}>
                                        {motivation.value}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="mb-1 font-bold">Salary</span>
                            <select
                                className="w-full px-2 border-black rounded-md border-[3px] font-semibold"
                                onChange={(e) => onSalaryChange(e.target.value)}
                            >
                                {Pay.map((pay) => (
                                    <option key={pay.id} value={pay.id}>
                                        {pay.value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="mb-1 font-bold">
                                Introduce yourself
                            </span>
                            <input
                                type="text"
                                className=" invalid:border-red-400 w-full px-2 border-black rounded-md border-[3px] font-semibold"
                                {...register("introduce", {
                                    required:
                                        "Please write down your introduction at least 10 characters",
                                    validate: (value: string) =>
                                        value.length >= 10 ||
                                        "Please write down your introduction at least 10 characters",
                                })}
                            />
                            <span className="text-sm font-semibold text-red-400">
                                {errors.introduce?.message}
                            </span>
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="mb-1 font-bold">
                                Tell us what your drerams are
                            </span>
                            <textarea
                                className=" invalid:border-red-400 font-semibold w-full max-w-full max-h-[130px] px-2 h-[130px] border-[3px] border-black rounded-md"
                                {...register("dream", {
                                    required:
                                        "Please write more than 10 characters if you wanna earn money ^^",
                                    validate: (value: string) =>
                                        value.length >= 10 ||
                                        "Please write more than 10 characters if you wanna earn money ^^",
                                })}
                            />
                            <span className="text-sm font-semibold text-red-400">
                                {errors.dream?.message}
                            </span>
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="mb-1 font-bold">Email</span>
                            <input
                                type="email"
                                className=" invalid:border-red-400 w-full px-2 border-black rounded-md border-[3px] font-semibold"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        isNaver: (value) =>
                                            value.includes("@naver.com") ||
                                            "Only @naver emails allowed",
                                    },
                                })}
                            />
                            <span className="text-sm font-semibold text-red-400">
                                {errors.email?.message}
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 transition-colors border-[3px] border-black bg-amber-300 hover:bg-amber-200 border-b-[5px] border-r-[5px] rounded-lg font-bold"
                        >
                            Give me this job
                        </button>
                        {isSubmitSuccessful && (
                            <div className="w-full py-2 font-semibold break-words ">
                                {form}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}

export default App;
