
export const Header = () => {
    return(
        <div className="bg-gray-700 sm:flex p-5 w-full h-full">
            <p className=" sm:flex-1 font-bold">Leonardo da Vinci</p>
            <p className="sm:px-5 hover:text-gray-500 cursor-pointer ">Home</p>
            <p className="sm:px-5 hover:text-gray-500 cursor-pointer">Sobre</p>
            <p className="sm:px-5 hover:text-gray-500 cursor-pointer">Portfolio</p>
            <p className="sm:px-5 hover:text-gray-500 cursor-pointer">Contato</p>
        </div>
    )
}