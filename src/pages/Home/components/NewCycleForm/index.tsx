import { useForm } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 60 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Pomodoro"></option>
        <option value="Teste 2"></option>
        <option value="Teste 3"></option>
        <option value="Teste 4"></option>
      </datalist>

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        // step={5}
        disabled={!!activeCycle}
        // min={5}
        // max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
