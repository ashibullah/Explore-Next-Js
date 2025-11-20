export default function CommentBox({ commentResult }) {
  return (
    <div className=" p-4 rounded-lg shadow-sm bg-black space-y-3">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 font-bold">
          {commentResult.email?.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-gray-200">{commentResult.name}</p>
          <p className="text-sm text-gray-500">{commentResult.email}</p>
        </div>
      </div>

      <p className="text-white leading-relaxed whitespace-pre-line">
        {commentResult.body}
      </p>

      <div className="text-xs text-gray-400">
        Comment ID: {commentResult.id} • Post ID: {commentResult.postId}
      </div>
    </div>
  );
}
