DetailsPage.jsx

- Details.jsx
    - plantId
    - image
    - commonName
    - scientificName
    - synonyms
    - pestsDiseases
    - warnings
    - height
    - spread
    - type
    - floweringPeriod
    - bloomSize
    - humidityLevel
    - propagation


- MaintenanceLevel.jsx
    - careDifficulty

- CareDetails.jsx
    - lightRange
    - hydrationRange
    - planting.temperatureRange
    - planting.placement
    - planting.substrate_recommendation
    - planting.potting_notes
    - watering


MyPlantsPage.jsx

- MyPlant.jsx
    - user_plant_id
    - plant_id 
    - user_id (do we need all three ids?)
    - image
    - common_name
    - scientific_name


SearchPage.jsx

- Plant.jsx
    - plant_id
    - image
    - common_name
    - scientific_name
    - light_range
    - hydration_range
    - care_difficulty
    - temperature_range

- MyCareHistoryPage.jsx
    - user_plant_id
    - plant_id
    - user_id
    - image
    - common_name
    - scientific_name

- MaintenanceLevel.jsx
    - light_range
    - hydration_range
    - care_difficulty

- CareDetails.jsx
    - planting.temperature_range
    - planting.placement
    - planting.substrate_recommendation
    - planting.potting_notes
    - watering

- CareLogItem.jsx
    - user_plant_log_id
    - user_plant_id
    - plant_note
    - care_date
    - care_note
