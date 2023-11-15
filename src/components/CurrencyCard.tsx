import { useContext, useRef } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import CurrencyContext from "@/context/currenctyContext"

const CurrencyCard = () => {
  const { state, dispatch } = useContext(CurrencyContext);

  const selectedCurrencyRef = useRef<string>('');

  const handleCurrencyChange = (value: string) => {
    selectedCurrencyRef.current = value;
  };

  const handleDeployClick = () => {
    switch (selectedCurrencyRef.current) {
      case 'cad':
        dispatch({ type: 'SET_CURRENCY', payload: 'CAD' });
        return;
      case 'jpy':
        dispatch({ type: 'SET_CURRENCY', payload: 'JPY' });
        return;
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{state.currentCurrency}</CardTitle>
        <CardDescription>Select currency</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Select defaultValue="cad" onValueChange={handleCurrencyChange}>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="cad">CAD</SelectItem>
                  <SelectItem value="jpy">JPY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleDeployClick}>Change</Button>
      </CardFooter>
    </Card>
  )
}

export default CurrencyCard;
