import { configureStore } from "@reduxjs/toolkit";

import activityreducers from "./features/activityreducers";

const store = configureStore(
    {
    reducer : {
        task : activityreducers
    }
}
)

export default store();