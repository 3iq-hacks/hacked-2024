export default function Component({ childToParent }: any) {
  return (
    <div>
      <input
        type="text"
        name="textInput"
        onInput={i => childToParent(i)}
        className="bg-gray-50 h-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></input>
    </div>
  )
}
