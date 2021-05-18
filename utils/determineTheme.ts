import { useTheme } from 'next-themes'
import palenight from 'prism-react-renderer/themes/palenight';
import github from 'prism-react-renderer/themes/github';

export default function determineTheme() {
  const { theme } = useTheme();

  if (theme === 'light') 
    return github;

  return palenight;
}