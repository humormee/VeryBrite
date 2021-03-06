class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :username, :email, presence: true, uniqueness: true

  attr_reader :password

  has_many :events,
    foreign_key: :author_id,
    class_name: :Event

  has_many :registrations,
    foreign_key: :attendee_id,
    class_name: :Registration
  
  has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end
end