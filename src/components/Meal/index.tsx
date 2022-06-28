import { MealContainer } from './MealStyles'

export default function Meal() {
  return (
    <MealContainer>
      <h1>Meal 1</h1>
      <table>
        <thead>
          <tr>
            <th>Aliment</th>
            <th>Calories</th>
            <th>Animal Protein</th>
            <th>Vegetal Protein</th>
            <th>Carbo</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken Breast</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Burger</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Sandwich</td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
    </MealContainer>
  )
}
