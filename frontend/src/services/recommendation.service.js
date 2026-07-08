// getRecommendations.js

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products,
) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = '',
  } = formData;

  if (
    selectedPreferences.length === 0 &&
    selectedFeatures.length === 0 &&
    !selectedRecommendationType
  ) {
    return [];
  }

  const productsWithPreferences =
    selectedPreferences.length > 0
      ? products.filter((product) =>
          selectedPreferences.some((preference) =>
            product.preferences.includes(preference),
          ),
        )
      : [];

  const productsWithFeatures =
    selectedFeatures.length > 0
      ? products.filter((product) =>
          selectedFeatures.some((feature) =>
            product.features.includes(feature),
          ),
        )
      : [];

  const allRecommendations = [
    ...productsWithPreferences,
    ...productsWithFeatures,
  ];

  const uniqueRecommendations = Array.from(
    new Set(allRecommendations.map((p) => p.id)),
  ).map((id) => allRecommendations.find((p) => p.id === id));

  const scored = uniqueRecommendations.map((product) => ({
    ...product,
    score:
      product.preferences.filter((p) => selectedPreferences.includes(p))
        .length +
      product.features.filter((f) => selectedFeatures.includes(f)).length,
  }));
  scored.sort((a, b) => b.score - a.score);

  const result = scored.map(({ score, ...product }) => product);

  if (selectedRecommendationType === 'SingleProduct') {
    if (scored.length === 0) return [];
    const maxScore = scored[0].score;
    const topTied = scored.filter((p) => p.score === maxScore);
    const { score, ...best } = topTied[topTied.length - 1];
    return [best];
  }

  if (selectedRecommendationType === 'MultipleProducts') {
    return result;
  }

  return result;
};

export default { getRecommendations };
