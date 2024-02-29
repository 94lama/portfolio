import './footer.sass'

export default function Footer() {
    return (
        <footer className="relative pt-10 mt-10 bg-slate-800/50 bg-opacity-75 backdrop-blur">
            <section className='mx-[12.5vw]'>
                <h2 >Thank you for the visit!</h2>
                <p>Please, feel free to visit my profile at the links above</p>
            </section>
            <section className='flex items-center md:h-3/4 justify-around justify-items-center w-75 mx-[12.5vw]'>
                <div>
                    <h3>Additional info</h3>
                    <ul>
                        <li>All background images are made by Microsoft Designer AI</li>
                        <li>This portfolio is made to talk about myself and experiment with new technologies</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}