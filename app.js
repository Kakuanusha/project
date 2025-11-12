// File: package.json
{
    "name": "dynamic-diagram-flow",
    "version": "1.0.0",
    "private": true,
    "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-scripts": "5.0.1",
    "reactflow": "11.6.0"
    },
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
    }
    }
    
    
    // File: src/index.js
    import React from 'react'
    import { createRoot } from 'react-dom/client'
    import App from './App'
    import './App.css'
    
    
    const container = document.getElementById('root')
    const root = createRoot(container)
    root.render(<App />)
    
    
    // File: src/metadata.json
    {
    "nodes": [
    {
    "id": "1",
    "type": "default",
    "position": { "x": 100, "y": 100 },
    "data": { "label": "Start Node" }
    },
    {
    "id": "2",
    "type": "default",
    "position": { "x": 400, "y": 100 },
    "data": { "label": "End Node" }
    }
    ],
    "edges": [
    {
    "id": "e1-2",
    "source": "1",
    "target": "2",
    "type": "smoothstep"
    }
    ]
    }
    
    
    // File: src/App.js
    import React, { useEffect } from 'react'
    import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Background,
    } from 'reactflow'
    import 'reactflow/dist/style.css'
    import metadata from './metadata.json'
    import Diagram from './components/Diagram'
    import Sidebar from './components/Sidebar'
    
    
    function App() {
    const [initialNodes, setInitialNodes] = React.useState([])
    const [initialEdges, setInitialEdges] = React.useState([])
    
    
    useEffect(() => {
    // Load from localStorage if present, otherwise metadata.json
    const saved = localStorage.getItem('diagram-state')
    }