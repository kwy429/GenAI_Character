import React, { useState, useCallback } from 'react';
import { CHARACTERS, EXPRESSIONS, ACTIONS, OUTFITS } from './constants';
import OptionSelector from './components/OptionSelector';
import ImageDisplay from './components/ImageDisplay';
import { generateCharacterImage } from './services/geminiService';
import { LoadingSpinner, MagicWandIcon } from './components/icons';

const App: React.FC = () => {
  const [character, setCharacter] = useState<string>(CHARACTERS[0].value);
  const [expression, setExpression] = useState<string>(EXPRESSIONS[0].value);
  const [action, setAction] = useState<string>(ACTIONS[0].value);
  const [outfit, setOutfit] = useState<string>(OUTFITS[0].value);
  
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateClick = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const imageData = await generateCharacterImage({
        character,
        expression,
        action,
        outfit,
      });
      setGeneratedImage(imageData);
    } catch (err) {
      setError('이미지 생성에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  }, [character, expression, action, outfit]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
            AI 캐릭터 생성기
          </h1>
          <p className="text-gray-600 mt-2">나만의 특별한 캐릭터를 만들어보세요!</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Options Column */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 order-2 lg:order-1">
            <OptionSelector 
              title="1. 캐릭터 선택" 
              options={CHARACTERS} 
              selectedValue={character} 
              onSelect={setCharacter}
              isCharacter={true}
            />
            <OptionSelector 
              title="2. 표정 선택" 
              options={EXPRESSIONS} 
              selectedValue={expression} 
              onSelect={setExpression}
            />
            <OptionSelector 
              title="3. 행동 선택" 
              options={ACTIONS} 
              selectedValue={action} 
              onSelect={setAction}
            />
            <OptionSelector 
              title="4. 의상 선택" 
              options={OUTFITS} 
              selectedValue={outfit} 
              onSelect={setOutfit}
            />
          </div>

          {/* Display & Action Column */}
          <div className="lg:sticky top-8 self-start order-1 lg:order-2">
            <ImageDisplay imageUrl={generatedImage} isLoading={isLoading} />
            
            {error && (
              <div className="mt-4 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg text-center">
                <p><strong>오류가 발생했습니다:</strong> {error}</p>
              </div>
            )}
            
            <div className="mt-6">
              <button
                onClick={handleGenerateClick}
                disabled={isLoading}
                className="w-full flex items-center justify-center text-lg font-bold bg-green-600 hover:bg-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner />
                    <span>생성 중...</span>
                  </>
                ) : (
                  <>
                    <MagicWandIcon className="mr-3 h-6 w-6"/>
                    <span>이미지 생성하기</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
