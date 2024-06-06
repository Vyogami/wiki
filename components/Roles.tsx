import { useScramble } from "use-scramble";
import { useEffect, useState } from "react";
import roles from "../assets/roles.json";

function* generateRandomRole(): Generator<string> {
  while (true) {
    const shuffledRoles = roles.sort(() => 0.5 - Math.random());
    for (const role of shuffledRoles) {
      yield role;
    }
  }
}

export default function RoleScramble() {
  const [currentRole, setCurrentRole] = useState<string>(
    generateRandomRole().next().value as string,
  );
  const { ref } = useScramble({
    text: currentRole,
    overdrive: false,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole(generateRandomRole().next().value as string);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return <span ref={ref}>I'm a Gopher.</span>;
}
