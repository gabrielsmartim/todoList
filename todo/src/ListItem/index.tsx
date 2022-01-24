import * as C from './styles';
import {Item} from '../types/item';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void,
    onClick:(id: number, done: boolean) => void
}

export const ListItem = ({item, onChange}: Props) => {
    
    return (
        <C.Container done={item.done}>
            <input 
                type="checkbox"
                checked={item.done} 
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.id}. {item.name}</label>
        </C.Container>
    );
};
