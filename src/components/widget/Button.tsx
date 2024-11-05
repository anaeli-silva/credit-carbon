import { useChatBox } from "@/hooks/useChatBox";
import { motion } from "framer-motion";

export function Button() {
    const { setIsOpen, isOpen } = useChatBox();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center fixed bottom-4 right-4 rounded-full bg-[#AB9699] hover:shadow-lg group'
        >
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span className="pl-2"></span>
                IANNI
                <span className="pl-2"></span>
            </span>

            <img src="/IANNI.jpg" width={72} height={72} className='rounded-full p-1' />
        </motion.button>
    );
}