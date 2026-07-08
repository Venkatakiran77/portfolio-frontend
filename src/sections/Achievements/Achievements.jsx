// src/sections/Achievements/Achievements.jsx
import { motion } from "framer-motion";
import { Target, Rocket, Zap, Layers } from "lucide-react";
import { Card } from "@/components/ui/Card.jsx";
import { useCountUp } from "@/hooks/useCountUp.js";
import { fadeInUp } from "@/animations/variants.js";

const ACHIEVEMENTS = [
  {
    icon: <Target size={16} />,
    value: 86.8,
    decimals: 1,
    suffix: "%",
    label: "mAP Accuracy (YOLOv8)",
  },
  {
    icon: <Rocket size={16} />,
    value: 10,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: <Zap size={16} />,
    value: 1000,
    suffix: "+",
    label: "Hours of Coding",
  },
  {
    icon: <Layers size={16} />,
    value: 5,
    suffix: "+",
    label: "Technologies Mastered",
  },
];

function AchievementRow({ item }) {
  const [ref, count] = useCountUp({
    end: item.value,
    decimals: item.decimals || 0,
  });
  return (
    <div ref={ref} className="flex items-center gap-2.5">
      <span className="text-[var(--color-accent-start)]">{item.icon}</span>
      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
        {count}
        {item.suffix}
      </span>
      <span className="text-xs text-[var(--color-text-tertiary)]">
        {item.label}
      </span>
    </div>
  );
}

export function Achievements() {
  return (
    <motion.div variants={fadeInUp}>
      <Card padding="lg" className="h-full">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
          Achievements
        </h3>
        <div className="flex flex-col gap-4">
          {ACHIEVEMENTS.map((item) => (
            <AchievementRow key={item.label} item={item} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default Achievements;
