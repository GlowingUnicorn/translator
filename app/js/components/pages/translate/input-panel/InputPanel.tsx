import React, { useMemo } from 'react'
import { Box, Button, OutlinedInput } from '@mui/material'
import { useImmerState } from '@shrugsy/use-immer-state'
import { Error, Search } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '~actions/searches'

const getLang = (searchTerm: string) => {
  const isCyrillicRegexp = /^\p{Script=Cyrillic}+$/u
  const isLatinRegexp = /^\p{Script=Latin}+$/u

  if (isCyrillicRegexp.test(searchTerm)) return 'bg'
  if (isLatinRegexp.test(searchTerm)) return 'en'

  return false
}

const InputPanel = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useImmerState({
    searchTerm: {
      value: '',
      lang: '',
      getLang: getLang,
      isValid: false,
      isDirty: false
    }
  })

  const isSearchTermError = useMemo(() => {
    return form.searchTerm.isDirty && !form.searchTerm.isValid
  }, [form.searchTerm.isDirty, form.searchTerm.isValid])

  const renderSearchTermInputLabel = () => {
    if (isSearchTermError) {
      return <Error />
    }

    if (form.searchTerm.value === '') {
      return <Search />
    }

    if (form.searchTerm.lang === 'en') {
      return 'Search'
    }

    if (form.searchTerm.lang === 'bg') {
      return 'Търси'
    }
  }

  const handleChange = ({ target: { value } }: { target: { value: string } }) => {
    if (value === '') {
      setForm(prev => {
        prev.searchTerm.value = value
        prev.searchTerm.lang = ''
        prev.searchTerm.isDirty = false
        prev.searchTerm.isValid = false
      })

      return
    }

    if (form.searchTerm.getLang(value) === 'bg') {
      setForm(prev => {
        prev.searchTerm.value = value
        prev.searchTerm.lang = 'bg'
        prev.searchTerm.isValid = true
        prev.searchTerm.isDirty = true
      })
    } else if (form.searchTerm.getLang(value) === 'en') {
      setForm(prev => {
        prev.searchTerm.value = value
        prev.searchTerm.lang = 'en'
        prev.searchTerm.isValid = true
        prev.searchTerm.isDirty = true
      })
    } else {
      setForm(prev => {
        prev.searchTerm.value = value
        prev.searchTerm.lang = ''
        prev.searchTerm.isValid = false
        prev.searchTerm.isDirty = true
      })
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    dispatch(setSearchTerm({ searchTerm: form.searchTerm.value, lang: form.searchTerm.lang }))
  }

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%'
      }}
    >
      <form onSubmit={handleSubmit}>
        <OutlinedInput
          fullWidth
          id="search"
          value={form.searchTerm.value}
          onChange={handleChange}
          endAdornment={
            <Button type="submit" disabled={form.searchTerm.isValid === false}>
              {renderSearchTermInputLabel()}
            </Button>
          }
          error={isSearchTermError}
        />
      </form>
    </Box>
  )
}

export default InputPanel
