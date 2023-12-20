import { useState } from "react"

export default function ReportsSidebar({item}){
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({
        value1: 'Initial Value 1',
        value2: 'Initial Value 2',
        value3: 'Initial Value 3',
      });
    
      const handleButtonClick = () => {
        // Update the values when the button is clicked
        setValues({
          value1: {
            "Date": "23 Jul 2021",
            "Name": "Goyal Ashok Kumar",
            "Road": "T13-Balluana to jhumba upto block boundary via chughe kalan",
            "SettingOutAndWorkingDrawing": "Satisfactory",
            "SiteClearanceAndGrubbing": "Satisfactory",
            "QualityArrangement": "Satisfactory",
            "Geometrics": "Satisfactory",
            "EarthWorkAndSubgradeInEmbankmentCutting": "Satisfactory",
            "EarthWorkCuttingInHillyRollingTerrain": "Not Applicable",
            "SubBase": "Satisfactory",
            "BaseCourseWaterBoundMacadam": "Satisfactory",
            "BituminousLayerPremixCarpetPMC": "Not Applicable",
            "Shoulders": "Not Applicable",
            "CrossDrainageWorksCausewaysAndCulvertsUpto6MSpan": "Not Applicable",
            "SideDrainAndCatchWaterDrain": "Not Applicable",
            "CCSemirigidPavementsAndAssociatedPukkaDrains": "Not Applicable",
            "RoadFurnitureAndMarkings": "Not Applicable",
            "OverallGrading": "Satisfactory"
          },
          value2: {
            "Date": "28 Sep 2021",
            "Name": "Chaudhary P P",
            "Road": "T13-Balluana to jhumba upto block boundary via chughe kalan",
            "SettingOutAndWorkingDrawing": "Satisfactory",
            "SiteClearanceAndGrubbing": "Satisfactory",
            "QualityArrangement": "Satisfactory",
            "Geometrics": "Satisfactory",
            "EarthWorkAndSubgradeInEmbankmentCutting": "Not Applicable",
            "EarthWorkCuttingInHillyRollingTerrain": "Not Applicable",
            "SubBase": "Not Applicable",
            "BaseCourseWaterBoundMacadam": "Satisfactory",
            "BituminousLayerPremixCarpetPMC": "Not Applicable",
            "Shoulders": "Not Applicable",
            "CrossDrainageWorksCausewaysAndCulvertsUpto6MSpan": "Satisfactory",
            "SideDrainAndCatchWaterDrain": "Not Applicable",
            "CCSemirigidPavementsAndAssociatedPukkaDrains": "Not Applicable",
            "RoadFurnitureAndMarkings": "Satisfactory",
            "OverallGrading": "Satisfactory"
          },
          value3: {
            "Date": "24 April 2022",
            "Name": "Goyal Ashok Kumar",
            "Road": "T13-Balluana to jhumba upto block boundary via chughe kalan",
            "SettingOutAndWorkingDrawing": "Satisfactory",
            "SiteClearanceAndGrubbing": "Satisfactory",
            "QualityArrangement": "Satisfactory",
            "Geometrics": "Satisfactory",
            "EarthWorkAndSubgradeInEmbankmentCutting": "Satisfactory",
            "EarthWorkCuttingInHillyRollingTerrain": "Not Applicable",
            "SubBase": "Satisfactory",
            "BaseCourseWaterBoundMacadam": "Satisfactory",
            "BituminousLayerPremixCarpetPMC": "Not Applicable",
            "Shoulders": "Not Applicable",
            "CrossDrainageWorksCausewaysAndCulvertsUpto6MSpan": "Not Applicable",
            "SideDrainAndCatchWaterDrain": "Not Applicable",
            "CCSemirigidPavementsAndAssociatedPukkaDrains": "Not Applicable",
            "RoadFurnitureAndMarkings": "Not Applicable",
            "OverallGrading": "Satisfactory"
          },
        });
      };

    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title ">
                    <span>
                        {/* { item.icon && <i className={item.icon}></i> } */}
                        {item.title}    
                    </span> 
                    <div className="b1"></div>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <ReportsSidebar key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain" onClick={handleButtonClick}>
                {/* { item.icon && <i className={item.icon}></i> } */}
                {item.Name}
            </a>
        )
    }
}