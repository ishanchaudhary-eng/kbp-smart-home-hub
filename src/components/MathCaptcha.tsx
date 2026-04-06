import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";

interface MathCaptchaProps {
  onVerified: (verified: boolean) => void;
  inputClassName?: string;
}

const MathCaptcha = ({ onVerified, inputClassName = "" }: MathCaptchaProps) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");

  const generate = useCallback(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setNum1(a);
    setNum2(b);
    setAnswer("");
    onVerified(false);
  }, [onVerified]);

  useEffect(() => { generate(); }, [generate]);

  const handleChange = (val: string) => {
    setAnswer(val);
    onVerified(parseInt(val, 10) === num1 + num2);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
        {num1} + {num2} = ?
      </span>
      <Input
        type="number"
        value={answer}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Answer"
        className={`w-24 ${inputClassName}`}
        required
      />
    </div>
  );
};

export default MathCaptcha;
