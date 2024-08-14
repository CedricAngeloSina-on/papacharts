"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  salary: {
    label: "AnnualSalary",
    color: "hsl(var(--chart-1))",
  },
  hourly: {
    label: "HourlyRate",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const chartData = [
  {
    Name: "ALLISON,  PAUL W",
    "Job Titles": "LIEUTENANT",
    Department: "FIRE",
    "Full or Part-Time": "F",
    "Salary or Hourly": "Salary",
    "Typical Hours": "",
    AnnualSalary: 107790.0,
    HourlyRate: 32523,
  },
  {
    Name: "BRUNO,  KEVIN D",
    "Job Titles": "SERGEANT",
    Department: "POLICE",
    "Full or Part-Time": "F",
    "Salary or Hourly": "Salary",
    "Typical Hours": "",
    AnnualSalary: 104628.0,
    HourlyRate: 22000,
  },
  {
    Name: "COOPER,  JOHN E",
    "Job Titles": "LIEUTENANT-EMT",
    Department: "FIRE",
    "Full or Part-Time": "F",
    "Salary or Hourly": "Salary",
    "Typical Hours": "",
    AnnualSalary: 114324.0,
    HourlyRate: 3000,
  },
  {
    Name: "CRESPO,  VILMA I",
    "Job Titles": "STAFF ASST",
    Department: "LAW",
    "Full or Part-Time": "F",
    "Salary or Hourly": "Salary",
    "Typical Hours": "",
    AnnualSalary: 76932.0,
    HourlyRate: 1000,
  },
];

export default function Barchart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Department"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="AnnualSalary" fill="var(--color-salary)" radius={4} />
            <Bar dataKey="HourlyRate" fill="var(--color-hourly)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
