import * as React from 'react'

import { Container, Label, StyledInput } from './style'

interface Props {
    type: string
    label: string
    onChange?: (text: string) => void
    noBorderBottom?: boolean
}

export const Input: React.FunctionComponent<Props> = ({
    type,
    label,
    noBorderBottom = false,
    onChange = () => null
}) => (
    <Container>
        <Label>{label}</Label>

        <StyledInput onChange={e => onChange(e.target.value)} type={type} noBorderBottom={noBorderBottom} />
    </Container>
)
