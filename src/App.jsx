import './App.css'
import { useState, useEffect } from 'react'
function App() {
const [fondos,setFondos]=useState([])
const [id, setId]=useState(null)
const [principal, setPrincipal]=useState('#e5e5f7')
const [secundario, setSecundario]=useState('#444cf7')
const [opacidad, setOpacidad]=useState(0.8)
const hexToRgba = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}


useEffect(() => {
  const p = hexToRgba(principal, opacidad)
  const s = hexToRgba(secundario, opacidad)

  setFondos([
    {
      id: 1,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          repeating-radial-gradient(circle at 0 0, transparent 0, ${p} 10px),
          repeating-linear-gradient(${s}, ${s})
        `
      },
      copiar: `
background-color: ${p};
background-image:
repeating-radial-gradient(circle at 0 0, transparent 0, ${p} 10px),
repeating-linear-gradient(${s}, ${s});
`
    },

    {
      id: 2,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          linear-gradient(135deg, ${s} 25%, transparent 25%),
          linear-gradient(225deg, ${s} 25%, transparent 25%),
          linear-gradient(45deg, ${s} 25%, transparent 25%),
          linear-gradient(315deg, ${s} 25%, ${p} 25%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '10px 0, 10px 0, 0 0, 0 0'
      },
      copiar: `
background-color: ${p};
background-image:
linear-gradient(135deg, ${s} 25%, transparent 25%),
linear-gradient(225deg, ${s} 25%, transparent 25%),
linear-gradient(45deg, ${s} 25%, transparent 25%),
linear-gradient(315deg, ${s} 25%, ${p} 25%);
background-size: 20px 20px;
background-position: 10px 0, 10px 0, 0 0, 0 0;
`
    },

    {
      id: 3,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          linear-gradient(135deg, ${s} 25%, transparent 25%),
          linear-gradient(225deg, ${s} 25%, transparent 25%),
          linear-gradient(315deg, ${s} 25%, transparent 25%),
          linear-gradient(45deg, ${s} 25%, ${p} 25%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '-10px 0, -10px 0, 0 0, 0 0'
      },
      copiar: `
background-color: ${p};
background-image:
linear-gradient(135deg, ${s} 25%, transparent 25%),
linear-gradient(225deg, ${s} 25%, transparent 25%),
linear-gradient(315deg, ${s} 25%, transparent 25%),
linear-gradient(45deg, ${s} 25%, ${p} 25%);
background-size: 20px 20px;
background-position: -10px 0, -10px 0, 0 0, 0 0;
`
    },

    {
      id: 4,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            ${s},
            ${s} 5px,
            ${p} 5px,
            ${p} 25px
          )
        `
      },
      copiar: `
background-color: ${p};
background-image:
repeating-linear-gradient(45deg, ${s}, ${s} 5px, ${p} 5px, ${p} 25px);
`
    },

    {
      id: 5,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          linear-gradient(to right, ${s}, ${s} 5px, ${p} 5px, ${p})
        `,
        backgroundSize: '10px 100%'
      },
      copiar: `
background-color: ${p};
background-image:
linear-gradient(to right, ${s}, ${s} 5px, ${p} 5px, ${p});
background-size: 10px 100%;
`
    },

    {
      id: 6,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          repeating-linear-gradient(45deg, ${s} 25%, transparent 25%, transparent 75%, ${s} 75%, ${s}),
          repeating-linear-gradient(45deg, ${s} 25%, ${p} 25%, ${p} 75%, ${s} 75%, ${s})
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px'
      },
      copiar: `
background-color: ${p};
background-image:
repeating-linear-gradient(45deg, ${s} 25%, transparent 25%, transparent 75%, ${s} 75%, ${s}),
repeating-linear-gradient(45deg, ${s} 25%, ${p} 25%, ${p} 75%, ${s} 75%, ${s});
background-size: 20px 20px;
background-position: 0 0, 10px 10px;
`
    },

    {
      id: 7,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          radial-gradient(circle, transparent 20%, ${p} 20%, ${p} 80%, transparent 80%),
          radial-gradient(circle, transparent 20%, ${p} 20%, ${p} 80%, transparent 80%),
          linear-gradient(${s} 2px, transparent 2px),
          linear-gradient(90deg, ${s} 2px, ${p} 2px)
        `,
        backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px',
        backgroundPosition: '0 0, 25px 25px, 0 -1px, -1px 0'
      },
      copiar: `
background-color: ${p};
background-image:
radial-gradient(circle, transparent 20%, ${p} 20%, ${p} 80%, transparent 80%),
radial-gradient(circle, transparent 20%, ${p} 20%, ${p} 80%, transparent 80%),
linear-gradient(${s} 2px, transparent 2px),
linear-gradient(90deg, ${s} 2px, ${p} 2px);
background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
background-position: 0 0, 25px 25px, 0 -1px, -1px 0;
`
    },

    {
      id: 8,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          linear-gradient(${s} 1px, transparent 1px),
          linear-gradient(to right, ${s} 1px, ${p} 1px)
        `,
        backgroundSize: '20px 20px'
      },
      copiar: `
background-color: ${p};
background-image:
linear-gradient(${s} 1px, transparent 1px),
linear-gradient(to right, ${s} 1px, ${p} 1px);
background-size: 20px 20px;
`
    },

    {
      id: 9,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          linear-gradient(${s} 2px, transparent 2px),
          linear-gradient(90deg, ${s} 2px, transparent 2px),
          linear-gradient(${s} 1px, transparent 1px),
          linear-gradient(90deg, ${s} 1px, ${p} 1px)
        `,
        backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
      },
      copiar: `
background-color: ${p};
background-image:
linear-gradient(${s} 2px, transparent 2px),
linear-gradient(90deg, ${s} 2px, transparent 2px),
linear-gradient(${s} 1px, transparent 1px),
linear-gradient(90deg, ${s} 1px, ${p} 1px);
background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`
    },

    {
      id: 10,
      completo: {
        backgroundColor: p,
        backgroundImage: `
          linear-gradient(135deg, ${s} 25%, transparent 25%),
          linear-gradient(225deg, ${s} 25%, transparent 25%),
          linear-gradient(45deg, ${s} 25%, transparent 25%),
          linear-gradient(315deg, ${s} 25%, ${p} 25%)
        `,
        backgroundSize: '10px 10px',
        backgroundPosition: '10px 0, 10px 0, 0 0, 0 0'
      },
      copiar: `
background-color: ${p};
background-image:
linear-gradient(135deg, ${s} 25%, transparent 25%),
linear-gradient(225deg, ${s} 25%, transparent 25%),
linear-gradient(45deg, ${s} 25%, transparent 25%),
linear-gradient(315deg, ${s} 25%, ${p} 25%);
background-size: 10px 10px;
background-position: 10px 0, 10px 0, 0 0, 0 0;
`
    }
  ])
}, [principal, secundario, opacidad])



useEffect(()=>{
    if (!fondos[0]) return
    let texto = fondos[id-1].copiar

  const copiar = () => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch(err => {
        console.error("Error al copiar", err);
      });
  };
  copiar()
  
},[id])
  return (
    <>
      <header>
        <h1>Background generate</h1>
      </header>
      <main>
        <h2>CSS Background generate</h2>
        <p>Useful backgrounds for your web pages</p>
        <div className="colores">
          <div className="colorespri">
            <label htmlFor="col">Color principal</label>
            <input type="color" name="col" id="col"  defaultValue="#e5e5f7" onChange={(e)=> setPrincipal(e.target.value)}/>
          </div>
          <div className="coloressec">
            <label htmlFor="colSec">Color Secundario</label>
            <input type="color" name="colSec" id="colSec"  defaultValue="#444cf7" onChange={(e)=> setSecundario(e.target.value)}/>
          </div>
          <div className="coloresbar">
            <label htmlFor="colbar">Color Secundario</label>
            <input type="range" min="0" max="1" step="0.1" value={opacidad} onChange={(e) => setOpacidad(e.target.value)} />
          </div>
        </div>
        <div className="contenedor">
          {fondos.map((e)=>(
            <div className="contenedor-bloques" style={e.completo} key={e.id}>
              <button onClick={()=> setId(e.id)}> Copiar <i class="bi bi-copy"></i></button>
            </div>  
          ))}
        </div>
      </main>
    </>
  )
}

export default App
