import styles from '../paginas.module.css'

const CadastroPet = ({tema}) => {
    return (
        <>
            <h1>🐱 Cadastro de Pet</h1>
            <br />
            
            <div className="row gap-5 mx-5">
                <div className="col-4">
                    <img src="error-cat.png" className={styles.errorCatImage} />
                </div>

                <div className="col">
                    <h2 className='my-4 display-3'> Registro Negado :(</h2>
                    <p>Por enquanto, não é possível realizar o cadastro de Pets no sistema. </p>
                    <p>Mas não se preocupe, estamos trabalhando nisso!</p>
                </div>

            </div>             
        </>
    )
}

export default CadastroPet