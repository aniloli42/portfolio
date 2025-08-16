import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggler = () => {
  return (
    <button className="ml-2 rounded-md bg-gray-200 p-2 dark:bg-gray-800">
      {false ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggler
