import { dirname } from 'path'
import { fileURLToPath } from 'url'
//importa las funciones dirname y fileURLToPath de los módulos path y url

const __filename = fileURLToPath(import.meta.url)//obtener la URL del archivo actual 
const __dirname = dirname(__filename)// obtener el directorio del archivo actual 

export default __dirname
//exporta la variable