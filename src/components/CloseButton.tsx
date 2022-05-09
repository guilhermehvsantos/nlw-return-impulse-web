import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton () {
    return (
        <Popover.Button className="top-5 right-5 absolute text-orange-300 hover:text-orange-100" title="Fechar 
        formulário">
            <X weight="bold" className="w-4 h-4" />
        </Popover.Button>
    );
}