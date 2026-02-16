import gradient from "./assets/gradient.png";


export default function App() {
    return (
        <>
            <main>
                <div className="tag-content">
                    <div
                        className="h-full w-full bg-[#0f0f1e] rounded-[calc(var(--radius)-var(--border))] p-8 text-white overflow-auto flex flex-col justify-center align-center">
                        <div className="flex flex-col justify-center align-center mx-auto h-[40%]">
                            <h1 className="flex justify-center align-center h-[30%] text-6xl font-bold">
                                <span
                                    className="inline-block overflow-hidden whitespace-nowrap border-r-[3px] border-white leading-none w-[18ch] animate-typing-cursor">Welcome to TickerFin</span>
                            </h1>
                            <p className="flex justify-center align-center text-center text-3xl text-[#b0b0b0] mt-4">
                                Your gateway to real-time stock market insights and analytics.
                            </p>
                        </div>
                        <button
                            className="mx-auto px-12 py-5 text-xl font-semibold text-white bg-[#733fa3] rounded-xl shadow-lg transition-all duration-300 hover:bg-[#5f2f8a] hover:scale-105 active:scale-95 cursor-pointer">
                            Get Started
                        </button>
                    </div>
                </div>
            </main>

            <img className="absolute top-0 right-0 opacity-[0.5] z-[-1]" src={gradient} alt="gradient"/>
            <div className="h-0 w-160 absolute top-1/5 right-0 shadow-[0_0_700px_20px_whitesmoke] -rotate-30 -z-10"/>

            <spline-viewer
                className="fixed left-1/2 bottom-[-20%] -translate-x-1/2 scale-100 w-[150%] h-[150%] z-1 opacity-[1] transition-opacity"
                url="https://prod.spline.design/rxcaFLgFOZFi139E/scene.splinecode"
            />
        </>
    );
}
