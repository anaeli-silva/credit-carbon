import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface MessageContainerProps {
    isBot: boolean;
    message: Message;
}

const botAnimationVariants = {
// initial: {
//   x: "-150%"
// },
// in: {
//   x: 0
// },
// out: {
//   x: "-150%"
// }
};

const userAnimationVariants = {
initial: {
    x: "150%"
},
in: {
    x: 0
},
out: {
    x: "150%"
}
};
  
const innerMessageAnimationVariants = {
in: {
    opacity: 1
},
out: {
    opacity: 0
}
};

export function MessageContainer({ isBot, message }: MessageContainerProps) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={
                isBot ? botAnimationVariants : userAnimationVariants
            }
            transition={{
                default: {
                    type: "tween",
                    duration: 0.3
                }
            }}
            className={twMerge("w-fit rounded-md px-2 my-2", isBot ? "bg-slate-200 rounded-bl-none py-2 dark:bg-[#2E2C30]" : "ml-auto")}
        >
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={innerMessageAnimationVariants}
            >
                {message.content}
            </motion.div>
        </motion.div>
    )
}