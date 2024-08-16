import { useContext } from "react"
import Accordion from "../accordion"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tact-toe"
import TreeView from "../tree-view"
import menus from "../tree-view/data";
import { FeatureFlagsContext } from "./context"



export default function FeatureFlags(){

    const {loading, enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode/>
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe/>
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor/>
        },
        {
            key: 'showAccordion',
            component: <Accordion/>
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
    ]

    function checkEnableFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if(loading) return <h1>Loading data ...</h1>

    return <div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map(componentItem => checkEnableFlags(componentItem.key)? componentItem.component : null)
        }
    </div>
}