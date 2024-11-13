import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'


export default function App() {
    const [red, setRed] = useState(false)

    const store = createXRStore()
    return (
        <>
            <button onClick={() => store.enterVR()}>Enter VR</button>
            <Canvas>
                <XR store={store}>
                    <mesh 
                        pointerEventsType={{ deny: 'grab' }} 
                        onClick={() => setRed(!red)} 
                        position={[0, 1, -1]}
                    >
                        <boxGeometry />
                        <meshBasicMaterial color={red ? 'red' : 'blue'} />
                    </mesh>
                </XR>
            </Canvas>
        </>
    )
}
