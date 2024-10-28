import { motion, MotionProps } from "framer-motion"
import { twMerge } from "tailwind-merge"

interface CardProps extends MotionProps {
    className?: string;
    children: React.ReactNode;
}

export function Card({ className, children, ...rest }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            // animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            {...rest}
            className={twMerge("", className)}
        >
            {children}
        </motion.div>
    )
}