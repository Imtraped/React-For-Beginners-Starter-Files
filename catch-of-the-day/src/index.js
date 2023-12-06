import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StorePicker from './components/StorePicker';

const container = document.querySelector('#main')
const root = createRoot(container)
root.render(
    <StrictMode>
        <StorePicker />
    </StrictMode>
    );