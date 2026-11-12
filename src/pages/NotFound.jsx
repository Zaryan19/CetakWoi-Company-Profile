import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

export const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-6">
      <span className="text-xs font-mono uppercase tracking-widest text-neutral-muted">404 Error</span>
      <h1 className="text-5xl font-bold text-primary">Halaman Tidak Ditemukan</h1>
      <p className="text-neutral-muted max-w-md mx-auto text-sm">
        Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
      </p>
      <div>
        <Link to="/">
          <Button variant="primary">Kembali ke Beranda</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

