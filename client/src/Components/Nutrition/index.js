import React from 'react'

import NutritionHeroCarousal from "./NutritionHeroCarousal";
import NutritionCarousal from './NutritionCarousal';
import NutritionCard from './NutritionCard';

const Nutrition = () => {
    return (
        <>
            <NutritionHeroCarousal/>
            <div className="my-6">
            <NutritionCarousal />
            </div>
            <div className="flex justify-between flex-wrap">
            <NutritionCard bg="red" image = "https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png" />
            <NutritionCard bg="red" image = "https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png" />
            <NutritionCard bg="red" image = "https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png" />
            <NutritionCard bg="red" image = "https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png" />
            <NutritionCard bg="red" image = "https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png" />
            <NutritionCard bg="red" image = "https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png" />
            </div>
        </>
    )
}

export default Nutrition;