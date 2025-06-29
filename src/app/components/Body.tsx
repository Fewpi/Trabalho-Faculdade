import imagem from '@/app/img/leonardo-da-vinci-1024x683.jpg'

export const Body = () => {
    return (
        <div className="bg-white w-full text-black p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <div className='flex flex-wrap'>
                    <h1 className="text-3xl">Leonardo DaVinci</h1>
                    <h2 className="text-2xl pl-2 pt-1 text-black/50">Portfolio Oficial</h2>
                </div>
                <img 
                    className='w-full h-auto object-cover rounded-md mt-4' 
                    src={imagem.src} 
                    alt="Leonardo Da Vinci" 
                />
            </div>
            <div className="flex flex-col justify-start pt-7">
                <div>
                    <h1 className='text-3xl'>Quem sou</h1>
                    <p className='mt-2 text-justify'>
                        Leonardo da Vinci foi um polímata italiano do Renascimento, conhecido como artista, cientista, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico. Ele é amplamente considerado um dos maiores gênios da história, com contribuições significativas para diversas áreas do conhecimento. 
                    </p>
                </div>

                <div className='mt-5'>
                    <h1 className='text-3xl'>Habilidades</h1>
                    <ul className='list-disc list-inside mt-2'>
                        <li>Pintor</li>
                        <li>Poeta</li>
                        <li>Artista</li>
                        <li>Desenhista</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
