import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

function App() {
    const char = useCharacter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                    char.moveUp();
                    break;
                case 'ArrowDown':
                case 's':
                    char.moveDown();
                    break;
                case 'ArrowLeft':
                case 'a':
                    char.moveLeft();
                    break;
                case 'ArrowRight':
                case 'd':
                    char.moveRight();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [char]);

    return (
        <C.Container>
            <C.Map>
                <Character x={char.x} y={char.y} side={char.side} />
            </C.Map>
        </C.Container>
    );
}

export default App;
