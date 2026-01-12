import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-pink-500 p-4">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <pre className="text-sm bg-gray-900 p-4 rounded max-w-full overflow-auto text-red-400">
            {this.state.error?.message}
          </pre>
          <button
            className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
