import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Machinery Exchange error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-charcoal-900 text-charcoal-100">
          <div className="text-center max-w-md">
            <p className="font-mono text-xs tracking-widest-2 text-safety-500 uppercase">
              // System Fault
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold text-charcoal-50 tracking-mega">
              SOMETHING BROKE DOWN.
            </h1>
            <p className="mt-4 text-charcoal-300 text-sm leading-relaxed">
              The workshop will have it back up shortly. Refresh the page, or head home and try a different route.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-safety-500 text-charcoal-950 text-xs tracking-widest-2 uppercase font-bold hover:bg-safety-400"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-charcoal-100 text-charcoal-100 text-xs tracking-widest-2 uppercase hover:bg-charcoal-100 hover:text-charcoal-900 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
