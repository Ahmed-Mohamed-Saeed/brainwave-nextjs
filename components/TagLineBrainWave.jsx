import brackets from "@/public/assets/svg/Brackets";

const TagLineBrainWave = ({ className, children }) => {
    return (
        <div className={`tagline flex items-center ${className || ""}`}>
            {brackets("left")}
            <div className="mx-3 text-n-3">{children}</div>
            {brackets("right")}
        </div>
    );
};

export default TagLineBrainWave;