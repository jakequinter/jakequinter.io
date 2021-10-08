import { useTheme } from 'next-themes'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import github from 'prism-react-renderer/themes/github';

export default function determineTheme() {
  const { theme } = useTheme();

  if (theme === 'light') 
    return github;
  return oceanicNext;
}