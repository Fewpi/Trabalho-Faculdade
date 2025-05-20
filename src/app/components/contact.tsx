export const Contact = () => {
    return(
        <div className="flex flex-col bg-white text-black w-full h-full gap-5 p-5">
            <div className="flex gap-2 mt-3">
                <h1 className="text-3xl">Contato</h1>
                <h2 className="text-2xl pt-1 text-black/50">Fale Conosco</h2>
            </div>  
            <input type="text" placeholder="Nome" className="border border-black/30 p-1 rounded-md"/>
            <input type="email" placeholder="Email" className="border border-black/30 p-1 rounded-md"/>
            <input type="tel" placeholder="Telefone" className="border border-black/30 p-1 rounded-md"/>
            <input type="text" placeholder="Assunto" className="border border-black/30 p-1 rounded-md"/>
            <input type="text" placeholder="Mensagem" className="border border-black/30 p-5 rounded-md"/>
            <button className="bg-green-500 rounded-md h-12 w-60 text-white mb-5 cursor-pointer">Enviar Mensagem!</button>
        </div>
    )
}