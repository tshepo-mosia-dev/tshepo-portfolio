const HeroImage = () => {
    return (
        <div className="flex justify-center lg:justify-end">
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-30" />

                <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-6xl font-bold text-white shadow-2xl">
                    TM
                </div>
            </div>
        </div>
    );
};

export default HeroImage;