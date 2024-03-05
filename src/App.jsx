import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Button.jsx";


const Icon = ({size = 24}) => {
    return <svg height={size} width={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_214_2932)">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
        </g>
        <defs>
            <clipPath id="clip0_214_2932">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>



        <div className="my-10 grid grid-cols-6 gap-8">
            <div className="flex flex-col gap-4 items-center">
                <h3>S</h3>
                <Button type="elevated" size="s">Label</Button>
                <Button type="filled" size="s">Label</Button>
                <Button type="filled" disabled size="s">Label Disabled</Button>
                <Button type="tonal" size="s">Label</Button>
                <Button type="outlined" size="s">Label</Button>
                <Button type="ghost" size="s">Label</Button>
                <Button type="critical" size="s">Label</Button>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h3>M</h3>
                <Button type="elevated" size="m">Label</Button>
                <Button type="filled" size="m">Label</Button>
                <Button type="filled" disabled size="m">Label Disabled</Button>
                <Button type="tonal" size="m">Label</Button>
                <Button type="outlined" size="m">Label</Button>
                <Button type="ghost" size="m">Label</Button>
                <Button type="critical" size="m">Label</Button>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h3>L</h3>
                <Button type="elevated" size="l">Label</Button>
                <Button type="filled" size="l">Label</Button>
                <Button type="filled" disabled size="l">Label Disabled</Button>
                <Button type="tonal" size="l">Label</Button>
                <Button type="outlined" size="l">Label</Button>
                <Button type="ghost" size="l">Label</Button>
                <Button type="critical" size="l">Label</Button>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h3>With Icon</h3>
                <Button type="elevated" size="s" icon={<Icon size={18}/>}>Label</Button>
                <Button type="filled" size="s" icon={<Icon size={18}/>}>Label</Button>
                <Button type="filled" disabled size="s" icon={<Icon size={18}/>}>Label Disabled</Button>
                <Button type="tonal" size="s" icon={<Icon size={18}/>}>Label</Button>
                <Button type="outlined" size="s" icon={<Icon size={18}/>}>Label</Button>
                <Button type="ghost" size="s" icon={<Icon size={18}/>}>Label</Button>
                <Button type="critical" size="s" icon={<Icon size={18}/>}>Label</Button>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h3>With Icon Right</h3>
                <Button type="elevated" size="s" icon={<Icon size={18}/>} iconRight>Label</Button>
                <Button type="filled" size="s" icon={<Icon size={18}/>} iconRight>Label</Button>
                <Button type="filled" disabled size="s" icon={<Icon size={18}/>} iconRight>Label Disabled</Button>
                <Button type="tonal" size="s" icon={<Icon size={18}/>} iconRight>Label</Button>
                <Button type="outlined" size="s" icon={<Icon size={18}/>} iconRight>Label</Button>
                <Button type="ghost" size="s" icon={<Icon size={18}/>} iconRight>Label</Button>
                <Button type="critical" size="s" icon={<Icon size={18}/>} iconRight>Label</Button>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h3>Only Icon</h3>
                <Button type="elevated" size="s" icon={<Icon size={18}/>} iconRight></Button>
                <Button type="filled" size="s" icon={<Icon size={18}/>} iconRight></Button>
                <Button type="filled" disabled size="s" icon={<Icon size={18}/>} iconRight> Disabled</Button>
                <Button type="tonal" size="s" icon={<Icon size={18}/>} iconRight></Button>
                <Button type="outlined" size="s" icon={<Icon size={18}/>} iconRight></Button>
                <Button type="ghost" size="s" icon={<Icon size={18}/>} iconRight></Button>
                <Button type="critical" size="s" icon={<Icon size={18}/>} iconRight></Button>
            </div>

        </div>

    </div>
  )
}

export default App
