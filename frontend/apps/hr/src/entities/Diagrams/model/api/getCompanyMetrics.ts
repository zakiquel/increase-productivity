import { apiUrl } from './const/apiUrl';

export type getCompanyMetricsReturn = {
  labels: string[];
  datasets: {
    label: string;
    data: string[];
  }[];
} | null;

export async function getCompanyMetrics(): Promise<getCompanyMetricsReturn> {
  try {
    const response = await fetch(`${apiUrl}/api/company_metrics_graphics`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaW5jcmVhc2UtcHJvZHVjdGl2aXR5LmFiZHJhc2hpdG92LWFjYWRlbXkucnUvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjMzNjA5NjgsImV4cCI6MTcyMzM2NDU2OCwibmJmIjoxNzIzMzYwOTY4LCJqdGkiOiJCVzF1bkIxTEY5S1lPMmZLIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AojadswsrJ4b1UqEiXLD_0NgUsoZE4rsEZZ9919WhMs',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
