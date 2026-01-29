import { useParams } from 'react-router-dom';

const mealDetails = () => {
  const {mealId} = useParams();
  console.log(mealId);
  
  return (
    <div>
      mealDetails
    </div>
  )
}

export default mealDetails
