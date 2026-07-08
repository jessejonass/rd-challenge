// Form.js

import useForm from '../../hooks/useForm';
import useProducts from '../../hooks/useProducts';
import useRecommendations from '../../hooks/useRecommendations';
import { ClearButton } from './ClearButton';
import { Features, Preferences, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';

function Form({ onSubmit, recommendations }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    onSubmit(dataRecommendations);
  };

  const handleClear = () => {
    handleChange('selectedPreferences', []);
    handleChange('selectedFeatures', []);
    handleChange('selectedRecommendationType', '');
    onSubmit([]);
  };

  const disableSubmitButton =
    !formData.selectedPreferences.length && !formData.selectedFeatures.length;

  const disableClearButton = recommendations.length === 0;

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      <div className="flex gap-2">
        <SubmitButton
          text="Obter recomendação"
          disabled={disableSubmitButton}
        />
        <ClearButton
          text="Limpar"
          onClick={handleClear}
          disabled={disableClearButton}
        />
      </div>
    </form>
  );
}

export default Form;
