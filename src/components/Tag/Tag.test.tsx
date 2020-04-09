import React from 'react';
import { render } from '@testing-library/react';
import { TagChip } from './TagChip';
import { Variant, Color } from '../../config/theme';

describe('Components/Tag', () => {
    it('render', () => {
        render(
            <TagChip tag={{ id: '1', label: 'test', createdAt: new Date() }} />,
        );
    });
});
