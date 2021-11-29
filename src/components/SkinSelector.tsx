import { findUrl, PlayerSkinType, PlayerType, skinList } from "../tictactoe"

type skinSelectorProps = {
    player: PlayerType,
    skins: PlayerSkinType,
    setSkins: Function
}

export const SkinSelector = ({player, skins, setSkins}: skinSelectorProps) => {

    const switchIcon = (selectedSkin:string) => {
        player === 1 
        ? setSkins({1: selectedSkin, 2: skins[2]})
        : setSkins({1: skins[1], 2: selectedSkin})
    }
    return (
        <div className="skinSelector">
            {
                skinList.map(skin => (
                    <div className={skin === skins[player] ? 'selectedIcon' : 'notSelectedIcon'}><img onClick={()=>switchIcon(skin)} className="cellIcon" src={findUrl(skin)}/></div>
                ))
            }
        </div>
    )
}