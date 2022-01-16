import { findUrl, PlayerSkinType, PlayerType, skinList } from "../tictactoe"

type skinSelectorProps = {
    player: PlayerType,
    skins: PlayerSkinType,
    setSkins: Function
}

export const SkinSelector = ({player, skins, setSkins}: skinSelectorProps) => {
    // This function switch the player's skin depending on which icon he clicked on
    const switchIcon = (selectedSkin:string) => {
        player === 1 
        ? setSkins({1: selectedSkin, 2: skins[2]})
        : setSkins({1: skins[1], 2: selectedSkin})
    }
    return (
        <div className="skinSelector">
            {
                skinList.map(skin => (
                    <div className={skin === skins[player] ? 'selectedIcon' : 'notSelectedIcon'}><img key={`${skin}.${player}`} onClick={()=>switchIcon(skin)} className="SBIcon" src={findUrl(skin)} alt={`${skin}'s icon'`}/></div>
                ))
            }
        </div>
    )
}