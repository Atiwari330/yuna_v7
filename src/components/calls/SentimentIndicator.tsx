interface SentimentIndicatorProps {
  score: number; // Score from 0 to 1
  category: 'Positive' | 'Neutral' | 'Negative';
}

const SentimentIndicator: React.FC<SentimentIndicatorProps> = ({ score, category }) => {
  // Determine color based on sentiment category
  const getColor = () => {
    switch (category) {
      case 'Positive':
        return 'bg-success-500 dark:bg-success-600';
      case 'Neutral':
        return 'bg-gray-400 dark:bg-gray-500';
      case 'Negative':
        return 'bg-error-500 dark:bg-error-600';
      default:
        return 'bg-gray-400 dark:bg-gray-500';
    }
  };

  // Determine width based on score (0-1)
  const getWidth = () => {
    // Convert score to percentage (0-100)
    const percentage = Math.round(score * 100);
    return `${percentage}%`;
  };

  return (
    <div className="flex flex-col">
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
        {category} ({Math.round(score * 100)}%)
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${getColor()}`} 
          style={{ width: getWidth() }}
        ></div>
      </div>
    </div>
  );
};

export default SentimentIndicator;
